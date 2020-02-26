import React  from 'react';
import ReactTooltip from 'react-tooltip' ;

function Composite(props){

    if(!props.data){
        return '';
    }

    return <div  className={"main "+(props.selecionados && props.selecionados.includes(props.data.name)?'ativo':'')}>
        <div data-tip={props.logs[props.data.name] && props.logs[props.data.name].join("<br/>") }>{props.data.name}</div>
        <div className={"children "+props.data.type}  >
            {props.data.children && props.data.children.map((item,key) => <Composite logs={props.logs} selecionados={props.selecionados} key={key} data={item} />)}
        </div>
        <ReactTooltip />
    </div>

}

export default Composite;