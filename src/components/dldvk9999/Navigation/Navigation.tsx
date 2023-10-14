import "./Navigation.scss";
import MenuList from "./Data/menuList.json";

function Navigation() {
    return (
        <section className="Navigation">
            {Object.entries(MenuList).map((menu, MENU_INDEX) => (
                <div className="NavigationMenu" key={MENU_INDEX}>
                    <h2>{menu[0]}</h2>
                    <div className="NavigationSub">
                        {Object.entries(menu[1]).map((sub, SUB_INDEX) => (
                            <a href={sub[1]} key={SUB_INDEX}>
                                {sub[0]}
                            </a>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
}

export default Navigation;
