function criaCalculadora() {
    return {
      display: document.querySelector('.display'),
  
      inicia() {
        this.cliqueBotoes();
        this.pressionaBackSpace();
        this.pressionaEnter();
      },
  
      pressionaBackSpace() {
        this.display.addEventListener('keydown', e => {
          if (e.keyCode === 8) {
            e.preventDefault();
            this.clearDisplay();
          }
        });
      },
  
      pressionaEnter() {
        this.display.addEventListener('keyup', e => {
          if (e.keyCode === 13) {
            this.realizaConta();
          }
        });
      },
  
      realizaConta() {
        let conta = this.display.value;
  
        try {
          conta = eval(conta);
  
          if(!conta) {
            alert('Conta inválida');
            return;
          }
  
          this.display.value = String(conta);
        } catch(e) {
          alert('Conta inválida');
          return;
        }
      },
  
      clearDisplay() {
        this.display.value = '';
      },
  
      apagaUm() {
        this.display.value = this.display.value.slice(0, -1);
      },
  
  
      cliqueBotoes() {
        document.addEventListener('click', e => {
          const el = e.target;
  
          if(el.classList.contains('number')) {
            this.btnParaDisplay(el.innerText);
          }
  
          if(el.classList.contains('clear')) {
            this.clearDisplay();
          }
  
          if(el.classList.contains('backone')) {
            this.apagaUm();
          }
  
          if(el.classList.contains('calculate')) {
            this.realizaConta();
          }
  
          this.display.focus();
        });
      },
  
      btnParaDisplay(valor) {
        this.display.value += valor;
      }
  
    };
  }
  
  const calculadora = criaCalculadora();
  calculadora.inicia();
  