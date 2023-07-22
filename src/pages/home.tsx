import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import Section from '../components/section';
import { Urls } from '../helper';
import { Link } from 'react-router-dom';

export default function Home(): React.JSX.Element {

    return (
        <>
            <Section title="Welcome">
                This site is for members of the Cyril Park, Bournemouth community What's App group.
            </Section> 

            <Section title="About Us">
                <p>
                    This group has been created to enable friends of Cyril Park, Bournemouth to be able to communicate freely and easily about
                    anything related to the park.
                </p>
                <p>
                    Topics can include Community Events, Security, Lost &amp; Found, Neighbourhood Planning or any other community focussed talk.
                </p>
                <p>
                    Anyone living near Cyril Park (see map below) can <a href={Urls.SignUp} target="_blank" rel="noreferrer">Sign Up</a> to
                    join the What's App Group.  We only ask that you respect each other and adhere to our <Link to="code">code of conduct</Link>.
                </p>
            </Section>

            <Row>
                <Col>
                    <Section title="Sign Up">
                        <p>
                            Sign up for the Friends of Cyril Park Community What's App Group. Once you are approved, one of our admins will add you in.
                        </p>

                        <p>
                            <Button target='_blank' rel="noreferrer" href={Urls.SignUp} variant='primary' size='sm'>Sign Up</Button>
                        </p>
                    </Section>
                </Col>
                <Col>

                    <Section title="Code of Conduct">

                        <p>
                            Read about our code of conduct to see how we respect the members of our community group.
                        </p>
                        <p>
                            <Link to={Urls.Code} className='btn btn-primary btn-sm'>Read more</Link>
                        </p>

                    </Section>

                </Col>
            </Row>

            <Section title="Who can join">

                <p>
                    Anyone living in the area indicated by the <span style={{ color: 'red' }}>red line</span> below
                    can <a href={Urls.SignUp} target="_blank" rel="noreferrer">sign up</a>.
                </p>

                <p style={{ textAlign: 'center' }}>
                    <img src="map.png" style={{ maxWidth: '100%' }} alt="Map" />
                </p>

            </Section>
        </>
    );
}
