class AlarmClock {
    constructor() {
      this.alarmCollection = [];
      this.intervalId = null;
    }
  
    addClock(time, callback) {
      if (!time || typeof callback !== 'function') {
        throw new Error('Отсутствуют обязательные аргументы');
      }
      let timeHoursMinutes = time.split(':').map(Number); 
      let hours = timeHoursMinutes[0];
      let minutes = timeHoursMinutes[1];
  
      let timeExists = this.alarmCollection.some(
        (call) => call.time.hours === hours && call.time.minutes === minutes
      );
      if (timeExists) {
        console.warn('Уже присутствует звонок на это же время');
        return;
      }
  
      let call = {
        callback: callback,
        time: {hours, minutes},
        canCall: true,
      };
      this.alarmCollection.push(call);
    }
  
    removeClock(time) {
      let timeHoursMinutes = time.split(':').map(Number); 
      let hours = timeHoursMinutes[0];
      let minutes = timeHoursMinutes[1];
      this.alarmCollection = this.alarmCollection.filter(
        (call) => !(call.time.hours === hours && call.time.minutes === minutes)
      ); 
    }
  
    getCurrentFormattedTime() {
        let now = new Date();
        let hours = String(now.getHours()).padStart(2, '0'); 
        let minutes = String(now.getMinutes()).padStart(2, '0'); 
        return `${hours}:${minutes}`; 
        }
  
    start() {
      if (this.intervalId !== null) {
        return;
      }
      this.intervalId = setInterval(() => {
        let currentTime = this.getCurrentFormattedTime();
        this.alarmCollection.forEach(call => {
          if (`${call.time.hours}:${call.time.minutes}` === currentTime && call.canCall) {
            call.canCall = false;
            call.callback();
          }
                   });
        }, 1000);
      }
    
     stop() {
       clearInterval(this.intervalId);
       this.intervalId = null;
     }
  
     resetAllCalls() {
       this.alarmCollection.forEach(call => {call.canCall = true; 
              })
     }
  
     clearAlarms() {
       this.stop();
       this.alarmCollection = [];
     }
  
  }
  
  