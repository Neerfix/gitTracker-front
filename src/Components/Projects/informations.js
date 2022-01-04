import {Paragraph} from "evergreen-ui";
import React from 'react';

export default function Information(props) {

  return (
    <section className={'d-flex flex-column'}>
      <Paragraph>
        <h6>Description :</h6>
        {props.descritpion}
      </Paragraph>
      <Paragraph>
        <h6>Contenu :</h6>
        {props.content}
      </Paragraph>
    </section>
  );
}
