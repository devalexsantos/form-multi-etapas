import { useHistory } from 'react-router';
import * as C from './styles';
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme';
import { ChangeEvent, useEffect } from 'react';

export const FormStep1 = () => {
  const history = useHistory();
  const { state,dispatch } = useForm();

  useEffect (()=> {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 1
    });
  }, []);
  
  const handleNextStep = () => {
    (state.name !== '') ? history.push('/step2') : alert("Preencha o Nome");
  }

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setName,
      payload: e.target.value
    });
  }

  return(
    <Theme>
      <C.Container>
        <p>Passo 1/3</p>
        <h1>Vamos começar com o seu nome</h1>
        <p>Preencha o campo abaixo com o seu nome completo.</p>

        <hr/>

        <label>Seu nome completo
          <input 
            type="text"
            autoFocus
            value={state.name}
            onChange={handleNameChange}
          />
        </label>

        <button onClick={handleNextStep}>Próximo</button>
      </C.Container>
    </Theme>
  )
}