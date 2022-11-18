// const solvecount = require('../db').db().collection("solvecount")
const { JSDOM } = require("jsdom")
const axios = require('axios')
const { response } = require("express")
let Solvecount = function(username) {
  this.username = username
  this.errors = []
}
Solvecount.prototype.lightojcount = function() {
  return new Promise((resolve, reject) => {
    const url = 'https://lightoj.com/user/suvrajit-cse';
    axios(url)
        .then(response => {
            const html = response.data;
            const dom = new JSDOM(html);
            const { document } = dom.window;
            const solvecout = document.querySelector("section.main-content.columns.view-wrapper div.container.column.is-12 div.container div.view-wrap.is-headless div.columns.has-portrait-padding:nth-child(2) div.column.is-8:nth-child(2) div.community-content div.community-widgets div.page-counts:nth-child(1) div.like-count.mr-4 > span:nth-child(1)").textContent;
            console.log(solvecout)
            resolve(solvecout)
        })
        .catch(function(){
            reject("Try again")
        })
  })
}
Solvecount.prototype.uricount = function() {
  return new Promise((resolve, reject) => {
    const url = 'https://www.urionlinejudge.com.br/judge/en/profile/110332';
    axios(url)
        .then(response => {
            const html = response.data;
            const dom = new JSDOM(html);
            const { document } = dom.window;
            const solvecout = document.querySelector("body.website-mode:nth-child(2) div.content.page:nth-child(2) div:nth-child(1) div.tour-step-profile:nth-child(1) ul.pb-information:nth-child(4) > li:nth-child(6)").textContent;
            console.log(solvecout)
            resolve(solvecout)
        })
        .catch(function(){
            reject("Try again")
        })
  })
}
Solvecount.prototype.timuscount = function() {
  return new Promise((resolve, reject) => {
    const url = 'https://acm.timus.ru/author.aspx?id=208798';
    axios(url)
        .then(response => {
            const html = response.data;
            const dom = new JSDOM(html);
            const { document } = dom.window;
            const solvecout = document.querySelector("table.body:nth-child(1) td:nth-child(1) table.author_stats:nth-child(3) tbody:nth-child(1) tr:nth-child(2) > td.author_stats_value").textContent;
            console.log(solvecout)
            resolve(solvecout)
        })
        .catch(function(){
            reject("Try again")
        })
  })
}
Solvecount.prototype.spojcount = function() {
  return new Promise((resolve, reject) => {
    const url = 'https://www.spoj.com/users/suvrajit_1/';
    axios(url)
        .then(response => {
            const html = response.data;
            const dom = new JSDOM(html);
            const { document } = dom.window;
            const solvecout = document.querySelector("div.content:nth-child(1) div.container:nth-child(3) div.row div.col-md-9 div.row.row-centered:nth-child(2) div.col-md-12 div.row:nth-child(4) div.col-md-6.text-center.valign-center:nth-child(1) dl.dl-horizontal.profile-info-data.profile-info-data-stats > dd:nth-child(2)").textContent;
            console.log(solvecout)
            resolve(solvecout)
        })
        .catch(function(){
            reject("Try again")
        })
  })
}
module.exports = Solvecount