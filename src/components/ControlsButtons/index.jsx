import React from 'react'

import { ListAgroup, ListItem, ButtonNext, ButtonPrev, ButtonNeutro } from '../ControlsButtons/styles';

    const ATIVO = {
        backgroundColor: '#5FC038',
    }

    const NEUTRO = {
        backgroundColor: '#5fc038b5',
    }

export default function Paginacao({prev, next, onPrevious, onNext}) {

    const handleButtonClick = () => {
        window.scrollTo(0, 0);
      };

    const handlePrevious = () => {
        onPrevious();
    }

    const handleNext = () => {
        onNext(); 
    }

    return (
        <>
            <ListAgroup>
                {
                    prev ? (
                        <ListItem>
                            <ButtonPrev onClick={() => { handlePrevious(); handleButtonClick(); } } style={ATIVO}>&larr; &nbsp; Anterior &nbsp;</ButtonPrev>
                        </ListItem>
                    ) : <ListItem>
                            <ButtonNeutro style={NEUTRO}> &larr; &nbsp; Anterior &nbsp;</ButtonNeutro>
                        </ListItem> 
                }
                {
                    next ? (
                        <ListItem>
                            <ButtonNext onClick={() => { handleNext(); handleButtonClick(); } } style={ATIVO}>&nbsp; Próximo &nbsp; &rarr;</ButtonNext>
                        </ListItem>
                    ) : <ListItem>
                            <ButtonNeutro style={NEUTRO}> &nbsp; Próximo &nbsp; &rarr;</ButtonNeutro>
                        </ListItem>
                }    
            </ListAgroup>
        </>
    )
}
