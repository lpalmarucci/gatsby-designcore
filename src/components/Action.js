import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link';
import Button from './styled/StyledButton';

const ActionGroup = styled.div`
    max-width: 500px;
    margin: 50px auto 100px;
    text-align: center;
`

const ActionTitle = styled.h4`
    color: #B9C8DD;
    font-weight: normal;
    text-transform: uppercase;
`

const ActionText = styled.p`
    color: #205284;
    line-height: 1.8;
`

const Action = () => (
    <ActionGroup>
        <Link to="/prova-gratuita">
            <Button>
                Try for free
            </Button>
        </Link>
        <ActionTitle>
            Get 7 days free trial
        </ActionTitle>
        <ActionText>
            Then, it&apos;s $9 per month, billed annually. <br />
            Cancel anytime. No soul required. <br />
            Free upgrade from version 2.
        </ActionText>
    </ActionGroup>
)

export default Action