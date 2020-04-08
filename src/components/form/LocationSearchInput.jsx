import React from "react";
import {toast} from 'react-toastify';
import PlacesAutocomplete, {
  geocodeByAddress
} from "react-places-autocomplete";


const LocationSearchInput = props => {
    const{meta, label, input} = props;
    
    const className = `form-control form-control-lg  ${meta.error && meta.touched  ? 'is-invalid': ''}`;
    const handleChange = address => {
        input.onChange({ name: address });
    };
    
    const handleSelect = async (address) => {
    try
    {
        const results = await geocodeByAddress(address);
        const type = results[0].types[0];
        //to get state record
        const mainState = results[0].address_components.filter(record =>{
                if(record.types[0] ==="administrative_area_level_1")
                return record.types[0];
                else
                return null;
        });
        //to get the state name
        if(mainState.length !== 0){
            var stateName = mainState[0].long_name? mainState[0].long_name: '';
        }
        const formattedAddress = results[0].formatted_address;
        input.onChange({ name: formattedAddress, type, stateName });
    }
    catch(ex){
      if(ex.response && ex.response===400){
        toast("A request was already made!");
      }
      else
      {
        console.error("error:" + ex);
        toast("Something went wrong! please try again!");
        input.onChange({ name: '' });
      }
    }
    // geocodeByAddress(address)
    // .then(()=>{ input.onChange({ name: formattedAddress, type, stateName });})
    // .catch(apiError => console.error("Error", apiError));
    
  };

  const SuggestionsList = ({
    getInputProps,
    getSuggestionItemProps,
    suggestions,
    loading
  }) => (
    <div className="autocomplete-root form-group">
      
            <label htmlFor={input.name}>{label}</label>
            <input 
                    {...getInputProps()} 
                    
                    className ={className}
                    placeholder = "Search | یافتن آدرس"
            />
            <div className ="text-danger small message error">
                
                {meta.touched ? meta.error : ''}
            </div>
      

      <div className="autocomplete-dropdown-container">
        {loading && <div>Loading...</div>}

        {suggestions.map(suggestion => {
            const style = suggestion.active
            ? { backgroundColor: '#2b3b65', color: '#ffffff', cursor: 'pointer', fontSize:'16px' }
            : { backgroundColor: '#ffffff', cursor: 'pointer', fontSize:'16px' };

            return (<div {...getSuggestionItemProps(suggestion, {style})}>
                {suggestion.description}
            </div>);
            })
        }
      </div>
    </div>
  );

  const {
    input: { value }
  } = props;

  return (
    <PlacesAutocomplete
      onChange={handleChange}
      onSelect={handleSelect}
      value={value ? value.name : ""}
    >
      {SuggestionsList}
    </PlacesAutocomplete>
  );
};

export default React.memo(LocationSearchInput);



// geocodeByAddress(address)
    //   .then(results => getLatLng(results[0]))
    //   .then(latLng => {input.onChange({ name: formattedAddress, type, location: latLng, });})
    //   .catch(apiError => console.error("Error", apiError));