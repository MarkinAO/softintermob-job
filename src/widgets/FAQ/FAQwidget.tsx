import { Block } from "@/entities/block/block";
import { FAQ } from "@shared/index";

import {mock} from "./mock"

export const FAQwidget = () => {
    return(
        <Block title="FAQ">
            {mock.map((el, i) => {
                return(<FAQ title={el.title} text={el.text} key={i} />)
            })}
        </Block>
    )
}
