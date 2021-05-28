import { Component } from "react";

interface CardBoxRoundProps {
    img: string,
    title: string,
    bg: string,
    desc: string
}
interface CardBoxRoundState { }
export class CardBoxRound extends Component<CardBoxRoundProps, CardBoxRoundState>{
    render() {
        const { img, bg, desc, title } = this.props;
        return <div className="CardBoxRound_Cpnt" style={{ background: bg }}>

            <div style={{
                background: `url(${img}) center center / cover`
            }}
                className="syncship5-img" />
            <div className="syncship5-name" >{title}</div>
            <div className="syncship5-about">{desc}</div>
        </div>
    }
}