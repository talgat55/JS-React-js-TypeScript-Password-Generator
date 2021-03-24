import React, {useState} from 'react';
import {Container, Input, Button,Label} from 'semantic-ui-react';
import './App.css';
import {generatePassword} from "./utils";

const App = () => {

    const [lengthPass, setLengthPass] = useState<number>(8);
    const [newPass, setNewPass] = useState('');
    const handlerGeneratePass = () => {
        let tempNewPass = generatePassword(lengthPass);
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
                        onChange={e =>{
                            setLengthPass(parseInt(e.target.value))
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
