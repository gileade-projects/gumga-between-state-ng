(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";var BetweenState=function BetweenState(){function setPage(page){this.page=page}function getPage(){return this.page}function setSearch(data){this.search=data}function getSearch(){return this.search}function setAdvancedSearch(data){this.advancedSearch=data}function getAdvancedSearch(){return this.advancedSearch}return{setPage:setPage,getPage:getPage,setSearch:setSearch,getSearch:getSearch,setAdvancedSearch:setAdvancedSearch,getAdvancedSearch:getAdvancedSearch}};angular.module("gumga.betweenstate",[]).service("BetweenState",BetweenState);

},{}]},{},[1])
//# sourceMappingURL=gumga-between-state.js.map
