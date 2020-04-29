import React from 'react';
import './About.css';
import { Container, Col, Image } from 'react-bootstrap';

const About = () => {
  return (
    <Container style={{ marginTop: '1rem' }}>
      <div className="about-content">
        <Col xs={6} md={4}>
          <Image
            src="https://source.unsplash.com/collection/190727/350x300"
            thumbnail
          />
        </Col>

        <div className="about-text">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores
            ipsa rem enim. Magnam, eaque quisquam nobis porro nemo rem
            repudiandae mollitia atque necessitatibus adipisci voluptas dolorem
            et ducimus explicabo doloremque error quos accusantium! Dolorum,
            magnam dicta! Earum, ad. Praesentium fugiat eligendi, tenetur
            nostrum nam sed nobis quae deserunt repellat suscipit architecto
            excepturi deleniti alias minima corporis, ex ipsam ducimus
            consectetur! Distinctio quo quis minus porro ab corporis iure
            accusamus praesentium architecto, voluptatum nulla et perferendis
            labore! Modi quae culpa sunt corporis fugiat officia repellat ea
            adipisci ullam, ipsa quidem ad dignissimos nihil vitae reprehenderit
            aut, voluptatem, amet quo praesentium animi. Lorem ipsum dolor sit
            amet consectetur adipisicing elit.
            <br /> <br /> Assumenda iure iusto incidunt nihil nulla. Aspernatur
            commodi corrupti optio libero sunt autem veritatis provident cumque
            aliquid a natus, quasi qui officiis cupiditate nihil eveniet ad,
            error id harum animi accusamus iusto hic voluptate quo? Impedit
            distinctio laudantium facilis iste natus porro eius, voluptatum a
            blanditiis est sequi nostrum nemo dolores ipsam excepturi. Natus in
            tenetur nihil. Natus ut minima aperiam modi quasi, hic quo fugit
            porro? In perferendis eaque, totam at quibusdam cumque minima
            molestiae laudantium!
          </p>
        </div>
      </div>
    </Container>
  );
};

export default About;
