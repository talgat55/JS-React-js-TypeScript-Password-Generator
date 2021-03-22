import React, {useState} from 'react';
import {Container, Input, Button} from 'semantic-ui-react';
import './App.css';
import {generatePassword} from "./utils";

const App = () => {

    const [newPass, setNewPass] = useState('');
    const handlerGeneratePass = () => {
        let tempNewPass = generatePassword();
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
