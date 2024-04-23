'use client';
import Image from "next/image";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from "react-bootstrap/Navbar";
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import Card from 'react-bootstrap/Card';
import { Button, Col, Row } from "react-bootstrap";
import Link from "next/link";

const NavigationBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <NavbarBrand href="/">
          <Image
            alt=""
            src="/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          Styling Demo
        </NavbarBrand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

// @TODO: Use react bootstrap container?
const Hero = () => {
  return (
    <section className="px-4 bg-gray-900 text-white py-4 md:py-20">
      <div className="container mx-auto">
        {/* Headline */}
        <h1 className="text-4xl font-bold mb-4">Welcome to our Website</h1>
        {/* Brief Description */}
        <p className="text-lg mb-8">Discover the best products and services for your needs.</p>
        {/* CTA */}
        <Button variant="primary" className="font-bold py-2 px-4 hover:bg-blue-700 hover:animate-ping">
          Get Started
        </Button>
      </div>
    </section>
  );
};

type ProjectCardProps = {
  data: {
    id: string
    title: string,
    description: string
  }
};

const ProjectCard = ({data}: ProjectCardProps) => {
  return (
    <Card className="my-2">
        <Card.Body>
          <Card.Title>{data.title}</Card.Title>
          <Card.Text>
            {data.description}
          </Card.Text>
          <Button variant="secondary" className="">
            View More
          </Button>
        </Card.Body>
      </Card>
  );
};

type ProjectsGridProps = {
  projects: {
    id: string,
    title: string,
    description: string
  }[]
}

const ProjectsGrid = ({projects}: ProjectsGridProps) => {
  return (
    <Container as={"section"} className="grid my-4 px-4 md:grid-cols-3 md:gap-4 ">
      {projects.map(project => <ProjectCard key={project.id} data={project} />)}
    </Container>
  );
};

const Footer = () => {
  return (
    <Container as='footer' className="bg-gray-900 text-white py-4 text-center">
      <Row>
        <Col>
          <h5 className="text-2xl pb-2">Social Links</h5>
          <ul>
            <li>
              <Link href="#">Facebook</Link>
            </li>
            <li>
              <Link href="#">Twitter</Link>
            </li>
            <li>
              <Link href="#">Instagram</Link>
            </li>
          </ul>
        </Col>
        <Col>
          <h5 className="text-2xl pb-2">Contact Information</h5>
          <p>Email: info@example.com</p>
          <p>Phone: 123-456-7890</p>
        </Col>
      </Row>
      <Row className="pt-4">
          <h5 className="text-2xl pb-2">Links</h5>
          <ul>
            <li>
              <Link href="#">About Us</Link>
            </li>
            <li>
              <Link href="#">Terms of Service</Link>
            </li>
            <li>
              <Link href="#">Privacy Policy</Link>
            </li>
          </ul>
        </Row>
    </Container>
  );
};

const projects = [{
  id: crypto.randomUUID(),
  title: "Project 1",
  description: "This is a description for project 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh."
}, {
  id: crypto.randomUUID(),
  title: "Project 2",
  description: "This is a description for project 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh."
}, {
  id: crypto.randomUUID(),
  title: "Project 3",
  description: "This is a description for project 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh."
}];

export default function Home() {
  return (
    <main className="min-h-full">
      <NavigationBar />
      <Hero />
      <ProjectsGrid projects={projects} />
      <Footer />
    </main>
  );
}
