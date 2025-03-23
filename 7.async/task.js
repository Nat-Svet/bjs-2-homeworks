class AlarmClock {
  constructor() {
      this.alarmCollection = [];
      this.intervalId = null;
  }

  addClock(time, callback) {
      if (!time || typeof callback !== 'function') {
          throw new Error('Отсутствуют обязательные аргументы');
      }

     
      let timeExists = this.alarmCollection.some(call => call.time === time);
      if (timeExists) {
          console.warn('Уже присутствует звонок на это же время');
                }

          let call = {
          callback: callback,
          time: time,
          canCall: true,
      };
      this.alarmCollection.push(call);
  }

  removeClock(time) {
      this.alarmCollection = this.alarmCollection.filter(call => call.time !== time);
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
              
              if (call.time === currentTime && call.canCall) {
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
      this.alarmCollection.forEach(call => {
          call.canCall = true; 
      });
  }

  
clearAlarms() {
  this.stop(); 
  this.alarmCollection = []; 
    }
}