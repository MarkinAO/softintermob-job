import { Block } from "@/entities/block/block";
import { FAQ } from "@shared/index";

import {mock as FAQs} from "./mock"

export const FAQwidget = () => {
    return(
        <Block title="FAQ" id="FAQ">
            {FAQs.map((el, i) => {
                return(<FAQ title={el.title} text={el.text} key={i} />)
            })}
        </Block>
    )
}
