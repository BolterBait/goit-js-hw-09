import Notiflix from 'notiflix';

const promiseForm = document.querySelector('.form');

promiseForm.addEventListener('submit', onClickBtn);
  function onClickBtn(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const amount = form.elements.amount.value
    
    const firstDelay = form.elements.delay.value;
    const delayStep = form.elements.step.value;
    for (let i = 0; i <= amount; i++) {
    function createPromise(position, delay) {
  
    return new Promise((resolve, reject) => {   
        
      const shouldResolve = Math.random() > 0.3;
      setTimeout(() => {
        if (shouldResolve) {
        resolve({ position:`${i}`, delay:`${delayStep}` });
        }
        reject({ position:`${i}`, delay:`${delayStep}` });
            }, firstDelay);
   });
  }    
  }
    
    createPromise(amount, `${delayStep}`)
  .then(({ position, delay }) => {
    
    Notiflix.Notify.warning(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.warning(`❌ Rejected promise ${position} in ${delay}ms`);
  })
  // .finally(() => form.reset());
  }

  