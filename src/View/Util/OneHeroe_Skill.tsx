import { Component } from "react";

interface DiamondSentenceProps {
    items: { title: string, desc: string, color: string }[]
}
export class DiamondSentence extends Component<DiamondSentenceProps, any>{
    render() {
        const { items } = this.props;
        return <div className="DiamondSentence_Cpnt mx_shipper2">
            <div className="mx-cont">
                {items.map((elSec) => {
                    return <>
                        <h1>{elSec.title}</h1>
                        <section style={{ borderColor: elSec.color }}>
                            <p style={{ color: elSec.color }}>
                                {elSec.desc}
                            </p>
                        </section>
                    </>
                })}


            </div>
        </div>
    }
}