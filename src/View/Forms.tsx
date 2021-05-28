import JSONSchemaForm from "@rjsf/material-ui"
import { Component } from "react"
import { formSkillScheme } from "../Assets/models";
import { JSONSchema7 } from "json-schema";
const Form = JSONSchemaForm;
export class FormSkill extends Component<any, any>{
    constructor(props: any) {
        super(props)
        // this.state={s}
    }
    render() {
        return <div style={{ width: "50vw" }}>
            <Form
                schema={formSkillScheme as JSONSchema7}
                uiSchema={{}}
                onSubmit={async (e) => {
                    console.log(JSON.stringify(e.formData))
                    postMessage(JSON.stringify(e.formData));
                }}

            />
        </div>
    }
}


const URL_DISCORD = "https://discord.com/api/webhooks/800441319004569620/y0_t1KO60-vvxTjUxU8PqWNp4yXActyHwnwcjV8aZA-OQaoSoUZEjYGzyuTR127XpOkT"
    + "?wait=true";
const InitPost = (msg: any) => {
    return {
        "method": "POST",
        "headers": { "content-type": "application/json" },
        "body": JSON.stringify(msg)
    }
}
const postMessage = (text: string) => {
    fetch(URL_DISCORD, InitPost({ content: text }))
}