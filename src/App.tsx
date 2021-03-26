import React, {FormEvent, useState} from 'react';
import {Container, Input, Button, Label, Checkbox, CheckboxProps} from 'semantic-ui-react';
import './App.css';
import {generatePassword} from "./utils";

type TypeLC = boolean | undefined;
type TypeUC = boolean | undefined;
type TypeNumber = boolean | undefined;
type TypeSymbols = boolean | undefined;
type TypeAC = boolean | undefined;
const App = () => {

    const [lengthPass, setLengthPass] = useState<number>(8);
    const [newPass, setNewPass] = useState('');
    const [stateLowerCase, setStateLowerCase] = useState<TypeLC>(true);
    const [stateUpperCase, setStateUpperCase] = useState<TypeUC>(true);
    const [stateNumber, setStateNumber] = useState<TypeNumber>(true);
    const [stateSymbols, setStateSymbols] = useState<TypeSymbols>(true);
    const [stateAC, setStateAC] = useState<TypeAC>(true);
    const handlerGeneratePass = () => {
        let tempNewPass = generatePassword(lengthPass, stateLowerCase,stateUpperCase,stateNumber,stateSymbols,stateAC);
        setNewPass(tempNewPass);
    }
    return (
        <Container>
            <div className="main">
                <div className="block_first">

                    <Button
                        onClick={handlerGeneratePass}
                        secondary
                    >
                        Сгенерировать пароль
                    </Button>
                </div>
                <div className="block__center">
                    <Label>
                        Длина пароля
                    </Label>
                    <Input
                        value={lengthPass}
                        type="number"
                        onChange={e => {
                            setLengthPass(parseInt(e.target.value))
                        }}
                    />
                </div>
                <div className="block__center">
                    <Checkbox
                        label={{children: 'Lowercase Characters'}}
                        checked={stateLowerCase}
                        type="checkbox"
                        onChange={(e:FormEvent<HTMLInputElement>, data:CheckboxProps)  => {
                            setStateLowerCase(data.checked)
                        }}
                    />
                </div>
                <div className="block__center">
                    <Checkbox
                        label={{children: 'Uppercase  Characters'}}
                        checked={stateUpperCase}
                        type="checkbox"
                        onChange={(e:FormEvent<HTMLInputElement>, data:CheckboxProps) => {
                            setStateUpperCase(data.checked)
                        }}
                    />
                </div>
                <div className="block__center">
                    <Checkbox
                        label={{children: 'Numbers'}}
                        checked={stateNumber}
                        type="checkbox"
                        onChange={(e:FormEvent<HTMLInputElement>, data:CheckboxProps) => {
                            setStateNumber(data.checked)
                        }}
                    />
                </div>
                <div className="block__center">
                    <Checkbox
                        label={{children: 'Symbols'}}
                        checked={stateSymbols}
                        type="checkbox"
                        onChange={(e:FormEvent<HTMLInputElement>, data:CheckboxProps) => {
                            setStateSymbols(data.checked)
                        }}
                    />
                </div>
                <div className="block__center">
                    <Checkbox
                        label={{children: 'Ambiguous Characters'}}
                        checked={stateAC}
                        type="checkbox"
                        onChange={(e:FormEvent<HTMLInputElement>, data:CheckboxProps) => {
                            setStateAC(data.checked)
                        }}
                    />
                </div>

                <div className="block_second">
                    {
                        newPass.length ?
                            <>
                                <Input value={newPass}/>
                            </>
                            :
                            null
                    }
                </div>

            </div>
        </Container>
    )
}

export default App;
