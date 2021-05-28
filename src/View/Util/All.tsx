import React, { Component } from "react";
import { Link } from "react-router-dom";
export interface ButtonLinkPropsExpose {
    link?: string;
    href?: string;
    text: string;
    onClick?: Function;
}
export class Glass extends Component<ButtonLinkPropsExpose, any> {
    render() {
        const { text, href, link, onClick } = this.props;
        return <div className="glassEffect" onClick={() => {
            if (onClick === undefined) { }
            else { onClick() }
        }}>
            <div className="container">
                {link !== undefined
                    ? <Link to={link!} href={href}>{
                        <div className="btn effect01"><span>{text}</span></div>
                    }</Link>
                    : <a href={href} className="btn effect01"><span>{text}</span></a>}
            </div>
        </div>
    }
}
