$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();

  $('#temp-up').click(function() {
    thermostat.up();
    updateTemperature();
  });

  $('#temp-down').click(function() {
    thermostat.down();
    updateTemperature();
  });

  $('#reset').click(function(){
    thermostat.resetTemperature();
    updateTemperature();
  });

  $('#power_saving_mode_on').click(function(){
    thermostat.switchPowerSavingModeOn();
    updateTemperature();
  });

  $('#power_saving_mode_off').click(function(){
    thermostat.switchPowerSavingModeOff();
    updateTemperature();
  });

  function updateTemperature() {
   $('#temperature').text(thermostat.temperature);
 };
})
