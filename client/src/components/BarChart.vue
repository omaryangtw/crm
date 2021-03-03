<template>
  <div>
    <div id="arc"></div>
    <div class="barChart"></div>
  </div>
</template>

<script>
import * as d3 from "d3";
import ContactService from "../services/ContactService";
export default {
  name: "BarChart",
  data() {
    return {
      contacts: null,
    };
  },
  async mounted() {
    this.contacts = (await ContactService.index()).data;
    this.generateArc();
  },
  methods: {
    generateArc() {
      const w = 500;
      const h = 500;

      const svg = d3
        .select("#arc")
        .append("svg")
        .attr("width", w)
        .attr("height", h);

      const sortedContacts = this.contacts.sort((a, b) =>
        a.count > b.count ? 1 : -1
      );
      const color = d3.scaleOrdinal(d3.schemeDark2);

      const max_contacts = d3.max(sortedContacts, (o) => o.count);

      const angleScale = d3
        .scaleLinear()
        .domain([0, max_contacts])
        .range([0, 1.5 * Math.PI]);

      const arc = d3
        .arc()
        .innerRadius((d, i) => (i + 1) * 25)
        .outerRadius((d, i) => (i + 2) * 25)
        .startAngle(angleScale(0))
        .endAngle((d) => angleScale(d.count));

      const g = svg.append("g");

      g.selectAll("path")
        .data(sortedContacts)
        .enter()
        .append("path")
        .attr("d", arc)
        .attr("fill", (d, i) => color(i))
        .attr("stroke", "#FFF")
        .attr("stroke-width", "1px")
        .on("mouseenter", function () {
          d3.select(this).transition().duration(200).attr("opacity", 0.5);
        })
        .on("mouseout", function () {
          d3.select(this).transition().duration(200).attr("opacity", 1);
        });

      g.selectAll("text")
        .data(this.contacts)
        .enter()
        .append("text")
        .text((d) => `${d.employee} -  ${d.count} `)
        .attr("x", -150)
        .attr("dy", -8)
        .attr("y", (d, i) => -(i + 1) * 25);

      g.attr("transform", "translate(300,200)");
    },
  },
};
</script>

<style>
</style>