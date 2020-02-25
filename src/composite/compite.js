import React  from 'react';

function Composite(props){

    if(!props.data){
        return '';
    }

    return <div className={"main "+(props.selecionados && props.selecionados.includes(props.data.name)?'ativo':'')}>
        <div>{props.data.name}</div>
        <div className={"children "+props.data.type}>
            {props.data.children && props.data.children.map((item,key) => <Composite logs={props.logs} selecionados={props.selecionados} key={key} data={item} />)}
        </div>
    </div>

}

export default Composite;