import React, { useState, useEffect } from 'react'

interface IProps {
  dataToFilter: any[] | undefined
  setItems: (data: any[]) => void
}

const FilteredSearch = ({ dataToFilter, setItems }: IProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchTermChange = (value: string) => setSearchTerm(value);

  const handleSearchChange = () => {
    if (dataToFilter) {
      const filteredData = dataToFilter.filter((item: any) => item["name"].toLowerCase().includes(searchTerm.toLowerCase()));
      setItems(filteredData);
    } 
  };

  useEffect(() => {    
    handleSearchChange();
  }, [searchTerm]);

  useEffect(() => {
    handleSearchTermChange("");
  // if dataToFilter change so it does mean that the tags has been reload so we have to reset the searchTerme field
  }, [dataToFilter]);
console.log(searchTerm);

  return (
    <input
      value={searchTerm}
      onChange={(e) => handleSearchTermChange(e.target?.value)}
      placeholder={`Rechercher par nom`}
    />
  )
}

export default FilteredSearch;
