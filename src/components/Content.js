import { useState } from "react";

const Content = () => {
    const [searchValue, setSearchValue] = useState("")

    const onSearchChange = (event) => {
        const { value } = event.target
        setSearchValue(value)
    }

    return (
        <div id="content">
            {searchValue.trim().length < 1 ? <img id="logo" src="https://internship.sidehustle.ng/img/logo-dark.64d45129.png"
                alt="SideHustle" /> : searchValue
            }
            <form>
                <div className="searchBorder">
                    <div id="sideSeparation">
                        <input className="searchBar" type="text" value={searchValue} onChange={onSearchChange} name="q" maxLength="100" />
                        <div id="voiceInputCont" aria-label="Search by voice">
                            <span id="voiceSearch"></span>
                        </div>
                    </div>
                </div>
                <div class="buttonRegion">
                    <input className="searchButton" type="submit" value="Google Search" />
                    <input className="searchButton" type="button" value="I'm feeling lucky" />
                </div>
            </form>
        </div>
    )
}
export default Content;