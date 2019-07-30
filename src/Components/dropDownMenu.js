import React, { Component } from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';

let stateList =
    [{value: "Andaman and Nicobar Islands", label: "Andaman and Nicobar Islands"},
        {value: "Andra Pradesh", label: "Andra Pradesh"},
        {value: "Arunachal Pradesh", label: "Arunachal Pradesh"},
        {value: "Assam", label: "Assam"},
        {value: "Bihar", label: "Bihar"},
        {value: "Chandigarh", label: "Chandigarh"},
        {value: "Chhattisgarh", label: "Chhattisgarh"},
        {value: "Dadar and Nagar Haveli", label: "Dadar and Nagar Haveli"},
        {value: "Daman and Diu", label: "Daman and Diu"},
        {value: "Delhi ", label: "Delhi "},
        {value: "Goa", label: "Goa"},
        {value: "Gujarat", label: "Gujarat"},
        {value: "Haryana", label: "Haryana"},
        {value: "Himachal Pradesh", label: "Himachal Pradesh"},
        {value: "Jammu and Kashmir", label: "Jammu and Kashmir"},
        {value: "Jharkhand", label: "Jharkhand"},
        {value: "Karnataka", label: "Karnataka"},
        {value: "Kerala", label: "Kerala"},
        {value: "Lakshadeep", label: "Lakshadeep"},
        {value: "Madya Pradesh", label: "Madya Pradesh"},
        {value: "Maharashtra", label: "Maharashtra"},
        {value: "Manipur", label: "Manipur"},
        {value: "Meghalaya", label: "Meghalaya"},
        {value: "Mizoram", label: "Mizoram"},
        {value: "Nagaland", label: "Nagaland"},
        {value: "Orissa", label: "Orissa"},
        {value: "Pondicherry", label: "Pondicherry"},
        {value: "Punjab", label: "Punjab"},
        {value: "Rajasthan", label: "Rajasthan"},
        {value: "Sikkim", label: "Sikkim"},
        {value: "Tamil Nadu", label: "Tamil Nadu"},
        {value: "Telagana", label: "Telagana"},
        {value: "Tripura", label: "Tripura"},
        {value: "Uttar Pradesh", label: "Uttar Pradesh"},
        {value: "Uttaranchal", label: "Uttaranchal"},
        {value: "West Bengal", label: "West Bengal"}]

let placeHolder = [{value: "Delhi ", label: "Delhi "}]
class dropDownMenu extends Component {
    render() {
        return (

            <Select
                placeholder = {placeHolder}
                value={placeHolder}
                options={stateList}
                isMulti={false}
            />
        )
    }
}

dropDownMenu.propTypes = {
    options: PropTypes.array,
    onChange: PropTypes.func,
    isMulti: PropTypes.bool
};

export default dropDownMenu