const Contact = (() => {
  const render = () => {
    const mainBody = document.getElementById('main-body');
    const contactUsHeader = document.createElement('h2');
    contactUsHeader.id = 'contact-us-header';
    contactUsHeader.textContent = "We'd Love To Hear From You.";
    mainBody.appendChild(contactUsHeader);
    const contactUsContainer = document.createElement('div');
    contactUsContainer.id = 'contact-us-container';
    const contactList = [
      {
        reason: 'Donations',
        blurb: 'As a small business, we focus our community impact on efforts that align with our workforce; homelessness, incarceration and recovery awareness.'
      },
      {
        reason: 'Press + Speaking',
        blurb: 'Want to write a feature on Not Chicken Takeover or have us speak at your event? (Speaking engagements are booking out 30-60 days in advance and are subject to availability)'
      },
      {
        reason: 'Party Food',
        blurb: 'If you are interested in having Not Chicken Takeover cater your event, please fill out the request form below.'
      },
      {
        reason: 'General Questions',
        blurb: 'Have a question and can’t find the right form here, send a request to our general mailbox.'
      },
    ];

    contactList.forEach(item => {
      const card = document.createElement('div');
      card.classList = 'contact-card';
      const contactReason = document.createElement('h3');
      contactReason.innerText = item.reason;
      const contactBlurb = document.createElement('p');
      contactBlurb.innerText = item.blurb;
      const contactButton = document.createElement('button');
      contactButton.innerText = 'Make Request';
      card.appendChild(contactReason);
      card.appendChild(contactBlurb);
      card.appendChild(contactButton);
      contactUsContainer.appendChild(card);
    });
    mainBody.appendChild(contactUsContainer);

  };

  return { render };
})();

export { Contact }