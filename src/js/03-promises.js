import Notiflix from 'notiflix';

const promiseForm = document.querySelector('.form');
promiseForm.addEventListener('submit', onClickBtn);

function onClickBtn(e) {
    e.preventDefault();
    const form = e.currentTarget; 
    const amount = Number(form.elements.amount.value);
    let firstDelay = Number(form.elements.delay.value);
    const delayStep = Number(form.elements.step.value);
    for (let counter = 1; counter <= amount; counter +=1) {
      
    function createPromise(counter, delayStep) {
      return new Promise((resolve, reject) => {   
      const shouldResolve = Math.random() > 0.3;
      setTimeout(() => {
        if (shouldResolve) {
        resolve({ counter, delayStep });
  }
      reject({ counter, delayStep });
      }, firstDelay);
   });
     }   
  createPromise(counter, delayStep)
  .then(({ counter, delayStep }) => {
    Notiflix.Notify.info(`✅ Fulfilled promise ${counter} in ${delayStep}ms`);
  })
  .catch(({ counter, delayStep }) => {
    Notiflix.Notify.warning(`❌ Rejected promise ${counter} in ${delayStep}ms`);
  }).finally(() => form.reset());
  firstDelay += delayStep;
  }
}