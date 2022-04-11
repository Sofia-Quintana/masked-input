import React from 'react';
import { ErrorLabel, Input, InputLabelWrap, Label, NestedContainer } from './styles/Form.styles';

const InputSection = props => {
    <NestedContainer>
        <InputLabelWrap>
            <Label>NAMES*</Label>
            <Input
                onChange={props.on}
            />
        </InputLabelWrap>
    </NestedContainer>

};

export default InputSection;