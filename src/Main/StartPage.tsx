import React, { useState, useEffect, FunctionComponent, ReactComponentElement, ReactElement } from 'react';
import { Container, Placeholder } from 'rsuite';
export const StartPage = (): any => {
    const { Paragraph } = Placeholder;
    return (
        <>
            <Container>
                <div>
                    <Paragraph style={{ marginTop: 30 }} graph="circle" />
                    <Paragraph style={{ marginTop: 30 }} graph="square" />
                    <Paragraph style={{ marginTop: 30 }} graph="image" />
                </div>
            </Container>
        </>
    )
}