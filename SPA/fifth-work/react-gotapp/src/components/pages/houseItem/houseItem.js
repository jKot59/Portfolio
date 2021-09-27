import React, {Component} from 'react';
import getResource from '../../../services/fetchRequest';
import ItemDetails, {Field} from '../../itemDetails/itemDetails';

export default class HouseItem extends Component {
  
    render() {
        
        const {id, page} = this.props
        // const books = (page === 'books') ? <X/> : null
    
        return (
            <ItemDetails
                itemId={id}
                getData={ () => getResource(`https://www.anapioficeandfire.com/api/${page}/${id}`)}
                renderItem={ item => item.name}
                select={'house'}>
                {/* пропсы field это то значение какого свойства мы достанем из полученного с сервера айтема (обязательно должен иметь имя field, потому что мы его вынимаем с таким же именем для рендеринга)*/}
                <Field field={"region"} label={'Region'}/>
                <Field field={'words'} label={'Words'}/>
            </ItemDetails>
        )
    }
}