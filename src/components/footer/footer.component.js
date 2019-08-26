import React from "react";
import './footer.component.scss';


export class FooterComponent extends React.Component {
    render () {
        return (
            <footer>
                <div className="container footer">
                    <div className="copyright" href="#">&copy; {new Date().getFullYear()} Riadonova</div>
                </div>
            </footer>
        )
    }
}
