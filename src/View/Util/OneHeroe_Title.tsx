import { Component } from "react";

interface ClassDoubleTextProps {
    mainText: string, secondText: { title: string, color: string }
}
interface ClassDoubleTextState { }
export class ClassDoubleText extends Component<ClassDoubleTextProps, ClassDoubleTextState>{
    render() {
        const { mainText, secondText } = this.props;
        return <div className="ClassDoubleText_Cpnt">
            <div className="grim-expro">
                <h1><i>{mainText}</i></h1>
                <h2><span style={{ color: secondText.color }}>{secondText.title}</span></h2>
            </div>
        </div>
    }
}