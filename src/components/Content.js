import { useState } from "react";
import {HiOutlineSearch} from "react-icons/hi";

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
                        <div id="Search">
                            <HiOutlineSearch />
                        </div>
                        <input className="searchBar" type="text" value={searchValue} placeholder="Search Side hustle or type a URL" onChange={onSearchChange} name="q" maxLength="100" />
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

            <div class="lang">
                Google offered in:
                    <a href="#">Hausa</a> <a href="#">Igbo</a>
                    <a href="#">Ede Yoruba</a>
                    <a href="#">Nigerian Pidgin</a>
            </div>
        </div>
    )
}
export default Content;