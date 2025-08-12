import {InverterSettingsDto, InverterStatus} from '../dto/inverter-settings.dto';
import {InverterModel} from '../../types';
import {localize} from '../../localize/localize';

/* Atess Status Codes
* source https://github.com/mkaiser/Atess-SHx-Inverter-Modbus-Home-Assistant
*
* Running
* Off-grid Charge
* Update Failed
* Maintain mode
* Forced mode
* Off-grid mode
* Un-Initialized
* Initial Standby
* Shutdown
* Standby
* Emergency Stop
* Startup
* AFCI self test shutdown
* Intelligent Station Building Status
* Safe Mode
* Open Loop
* Restarting
* External EMS mode
* Fault
* Stop
* De-rating Running
* Dispatch Run
* Warn Running
* Unknown
*/


export class Atess extends InverterSettingsDto {
    brand = InverterModel.Atess;
    statusGroups: InverterStatus = {
        standby: {states: ['standby','initial standby'], color: 'blue', message: localize('common.standby')},
        selftest: {states: ['startup'], color: 'blue', message: localize('common.selftest')},
        running: { states: ['running'], color: 'green', message: localize('common.running')},
        offgrid: {states:['off-grid mode'], color: 'orange', message: localize('common.offgrid')},
        externalcontrol: {states:['external ems mode','forced mode'], color: 'green', message: localize('common.externalcontrol')},
        shutdown: {states: ['shutdown','restarting','afci self test shutdown'], color: 'red', message: localize('common.shutdown')},
        normalstop: {states: ['stop'], color: 'yellow', message: localize('common.normalstop')},
        alarm: {states: ['warn running'],color: 'orange', message: localize('common.alarm')},
        sustain: {states:['de-rating running'], color: 'red', message: localize('common.sustain')},
        fault: {
            states: ['update failed', 'maintain mode','emergency stop','fault','unknown','un-initialized','open loop','safe mode','dispatch run'],
            color: 'red',
            message: localize('common.fault')
        },
        
    };
    image = 'https://static.atesspower.com/upload/images/20240808/917c6de5a2ab20fae9dc0248723fffab.png'
}