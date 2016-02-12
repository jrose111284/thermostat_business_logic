'use strict'

describe('Thermostat', function(){

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat;
  });

  it('will start at 20 degrees', function(){
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });
});
