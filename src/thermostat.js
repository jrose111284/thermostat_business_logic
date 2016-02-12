'use strict'

function Thermostat(){
  this.temperture = 20;
};

Thermostat.prototype.getCurrentTemperature = function(){
  return this.temperture;
};
