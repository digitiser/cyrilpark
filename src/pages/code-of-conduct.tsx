import React from 'react';
import { Card } from 'react-bootstrap';
import ReactDOM from 'react-dom/client'
import Section from '../components/section';

export default function CodeOfConduct() : React.JSX.Element {

    const margin = 'mt-3';

    return (
        <>
            <Section title="Our Pledge">
                <p>We as members, contributors, and leaders pledge to make participation in our community a harassment-free experience for everyone,
                    of age, body size, visible or invisible disability, ethnicity, sex characteristics, gender identity and expression,
                    of experience, education, socio-economic status, nationality, personal appearance, race, religion, or sexual identity and orientation.</p>

                <p>We pledge to act and interact in ways that contribute to an open, welcoming, diverse, inclusive, and healthy community.</p>
            </Section>

            <Section title="Our Standards">
                <p>Examples of behaviour that contributes to a positive environment for our community include:</p>

                <ul>
                    <li>Demonstrating empathy and kindness toward other people</li>
                    <li>Being respectful of differing opinions, viewpoints, and experiences</li>
                    <li>Giving and gracefully accepting constructive feedback</li>
                    <li>Accepting responsibility and apologizing to those affected by our mistakes, and learning from the experience</li>
                    <li>Focusing on what is best not just for us as individuals, but for the overall community</li>
                </ul>

                <p>Examples of unacceptable behaviour include:</p>

                <ul>
                    <li>The use of sexualized language or imagery, and sexual attention or
                    advances of any kind</li>

                    <li>The use of racist language or imagery</li>

                    <li>Trolling, insulting or derogatory comments, and personal or political attacks</li>

                    <li>Public or private harassment</li>

                    <li>Publishing others&rsquo; private information, such as a physical or email
                    address, without their explicit permission</li>

                    <li>Other conduct which could reasonably be considered inappropriate in a
                    professional setting</li>
                </ul>

            </Section>
                
            <Section title="Enforcement Responsibilities">
                <p>Community leaders are responsible for clarifying and enforcing our standards of acceptable behaviour and will take appropriate and fair corrective action in response to any behavior that they deem inappropriate, threatening, offensive, or harmful.</p>
                <p>Community leaders have the right and responsibility to remove comments and other contributions that are not aligned to this Code of Conduct, and will communicate reasons for moderation decisions when appropriate.</p>
            </Section>

            <Section title="Scope">
                This Code of Conduct applies within all community spaces, and also applies when an individual is officially representing the
                community in public spaces. Examples of representing our community include using an official e-mail address, posting via an
                official social media account, or acting as an appointed representative at an online or offline event.
            </Section>
            <Section title="Enforcement">
                <p>Instances of abusive, harassing, or otherwise unacceptable behaviour may be reported to the community leaders responsible for enforcement by contacting an administrtor of the group. All complaints will be reviewed and investigated promptly and fairly.</p>
                <p>All community leaders are obligated to respect the privacy and security of the reporter of any incident.</p>
            </Section>
            <Section title="Enforcement Guidelines">
                <p>Community leaders will follow these Community Impact Guidelines in determining the consequences for any action they deem in violation of this Code of Conduct:</p>

                <h3 id="1-correction">1. Correction</h3>

                <p><strong>Community Impact</strong>: Use of inappropriate language or other behaviour deemed unprofessional or unwelcome in the community.</p>

                <p><strong>Consequence</strong>: A private, written warning from community leaders, providing clarity around the nature of the violation and an explanation of why the behaviour was inappropriate. A public apology may be requested.</p>

                <h3 id="2-warning">2. Warning</h3>

                <p><strong>Community Impact</strong>: A violation through a single incident or series of actions.</p>

                <p><strong>Consequence</strong>: A warning with consequences for continued behaviour. No interaction with the people involved, including unsolicited interaction with those enforcing the Code of Conduct, for a specified period of time. This includes avoiding interactions in community spaces as well as external channels like social media. Violating these terms may lead to a temporary or permanent ban.</p>

                <h3 id="3-temporary-ban">3. Temporary Ban</h3>

                <p><strong>Community Impact</strong>: A serious violation of community standards, including sustained inappropriate behaviour.</p>

                <p><strong>Consequence</strong>: A temporary ban from any sort of interaction or public communication with the community for a specified period of time. No public or private interaction with the people involved, including unsolicited interaction with those enforcing the Code of Conduct, is allowed during this period. Violating these terms may lead to a permanent ban.</p>

                <h3 id="4-permanent-ban">4. Permanent Ban</h3>

                <p><strong>Community Impact</strong>: Demonstrating a pattern of violation of community standards, including sustained inappropriate behaviour,  harassment of an individual, or aggression toward or disparagement of classes of individuals.</p>

                <p><strong>Consequence</strong>: A permanent ban from any sort of public interaction within the project community.</p>
            </Section>
            <Section title="Attribution">
                <p>This Code of Conduct is adapted from the <a href="https://www.contributor-covenant.org">Contributor Covenant</a>, version 2.0,
                available at <a href='https://www.contributor-covenant.org/version/2/0/code_of_conduct'>https://www.contributor-covenant.org/version/2/0/code_of_conduct.html</a>.</p>
            </Section>
        </>
    );
}