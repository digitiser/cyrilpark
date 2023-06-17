import React from 'react';
import { Card } from 'react-bootstrap';

import './section.scss';

interface SectionProps
{
    title: string;
    children: React.ReactNode;
}

export default function Section(props: SectionProps) : React.JSX.Element {

    const margin = 'mt-3';
    const id = props.title.replace(' ', '-').toLowerCase();

    return (
        <Card className={margin} id={id}>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.children}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}