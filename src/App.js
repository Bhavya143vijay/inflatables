import {Component} from 'react'

import TabItem from './components/TabItem'
import ProjectItem from './components/ProjectItem'
import Header from './components/Header'

import './App.css'

const tabsList = [
  {tabId: 'INFLATABLES', displayText: 'Inflatables(Bouncy)'},
  {tabId: 'BALLOONS', displayText: 'Balloons'},
  {tabId: 'FURCOSTUMES', displayText: 'FurCostumes'},
  {tabId: 'CONTACT_US', displayText: 'Contact Us'},
  {tabId: 'ABOUT_US', displayText: 'About Us'},
]

const projectsList = [
  {
    projectId: 0,
    category: 'INFLATABLES',
    imageURL:
      'https://res.cloudinary.com/dwi1zckuz/image/upload/v1696589997/slides_pnh0w5.jpg',
    title: 'INFLATABLES',
  },
  {
    projectId: 1,
    category: 'INFLATABLES',
    imageURL:
      'https://res.cloudinary.com/dwi1zckuz/image/upload/v1696590809/pencil_ab21ku.jpg',
    title: 'INFLATABLES(Bouncy)',
  },
  {
    projectId: 2,
    category: 'INFLATABLES',
    imageURL:
      'https://res.cloudinary.com/dwi1zckuz/image/upload/v1696587744/advertisements_hg7cm5.jpg',
    title: 'INFLATABLES',
  },
  {
    projectId: 3,
    category: 'INFLATABLES',
    imageURL:
      'https://res.cloudinary.com/dwi1zckuz/image/upload/v1696586890/advertisements1_engszm.jpg',
    title: 'INFLATABLES (Advertising)',
  },
  {
    projectId: 4,
    category: 'INFLATABLES',
    imageURL:
      'https://res.cloudinary.com/dwi1zckuz/image/upload/v1696582623/Inflatables_rckopb.jpg',
    title: 'INFLATABLES',
  },
  {
    projectId: 5,
    category: 'INFLATABLES',
    imageURL:
      'https://res.cloudinary.com/dwi1zckuz/image/upload/v1696595907/tents_p5hg9q.jpg',
    title: 'INFLATABLES',
  },
  {
    projectId: 6,
    category: 'INFLATABLES',
    imageURL:
      'https://res.cloudinary.com/dwi1zckuz/image/upload/v1696596195/WhatsApp_Image_2023-10-06_at_13.29.29_623e74a4_ibztpv.jpg',
    title: 'INFLATABLES',
  },
  {
    projectId: 7,
    category: 'INFLATABLES',
    imageURL:
      'https://res.cloudinary.com/dwi1zckuz/image/upload/v1696596485/vinayak_emswts.jpg',
    title: 'INFLATABLES',
  },
  {
    projectId: 8,
    category: 'INFLATABLES',
    imageURL:
      'https://res.cloudinary.com/dwi1zckuz/image/upload/v1696596908/teeth_lgkmmj.jpg',
    title: 'INFLATABLES',
  },
  {
    projectId: 9,
    category: 'INFLATABLES',
    imageURL:
      'https://res.cloudinary.com/dwi1zckuz/image/upload/v1696597207/bott_n4igr1.jpg',
    title: 'INFLATABLES',
  },
  {
    projectId: 10,
    category: 'INFLATABLES',
    imageURL:
      'https://res.cloudinary.com/dwi1zckuz/image/upload/v1696597379/rings_vx2wjv.jpg',
    title: 'INFLATABLES',
  },
  {
    projectId: 11,
    category: 'BALLOONS',
    imageURL:
      'https://www.inflatable-zorb-ball.com/photo/ps2398472-promotion_custom_inflatable_helium_balloon.jpg',
    title: 'BALLOONS',
  },
  {
    projectId: 12,
    category: 'BALLOONS',
    imageURL:
      'https://ae01.alicdn.com/kf/HTB15yjGiV9gSKJjSspbq6zeNXXam/AG022-inflatable-ground-balloon-inflatable-advertising-balloon-inflatable-big-balloons.jpg',
    title: 'BALLOONS',
  },
  {
    projectId: 13,
    category: 'BALLOONS',
    imageURL:
      'https://3.imimg.com/data3/CQ/QI/MY-1759377/inflatable-balloons-500x500.jpg',
    title: 'BALLOONS',
  },
  {
    projectId: 14,
    category: 'BALLOONS',
    imageURL:
      'https://www.dhresource.com/0x0s/f2-albu-g4-M00-EB-C4-rBVaEVexhJWADJY8AAO9qB5xhwQ539.jpg/hot-sale-giant-inflatable-balloon-rainbow.jpg',
    title: 'BALLOONS',
  },
  {
    projectId: 15,
    category: 'BALLOONS',
    imageURL:
      'https://image.made-in-china.com/43f34j00PvKEnBGIsazY/Inflatable-Balloon.jpg',
    title: 'BALLOONS',
  },
  {
    projectId: 16,
    category: 'BALLOONS',
    imageURL:
      'https://nextgenerationinflatables.com/wp-content/uploads/2014/10/Helium-blimps-3.jpg',
    title: 'BALLOONS',
  },
  {
    projectId: 17,
    category: 'BALLOONS',
    imageURL:
      'https://www.glowinflatables.com/wp-content/uploads/2019/11/Giant-Advertsing-Spheres.jpg',
    title: 'BALLOONS',
  },
  {
    projectId: 18,
    category: 'BALLOONS',
    imageURL:
      'https://res.cloudinary.com/dwi1zckuz/image/upload/v1696617349/red_balloon_uuiozx.jpg',
    title: 'BALLOONS',
  },
  {
    projectId: 19,
    category: 'BALLOONS',
    imageURL:
      'https://res.cloudinary.com/dwi1zckuz/image/upload/v1696617392/white_balloon_oodzmk.jpg',
    title: 'BALLOONS',
  },
  {
    projectId: 20,
    category: 'FURCOSTUMES',
    imageURL:
      'https://res.cloudinary.com/dwi1zckuz/image/upload/v1696618042/fur_coustumes_rc7qrf.jpg',
    title: 'FURCOSTUMES',
  },
  {
    projectId: 21,
    category: 'FURCOSTUMES',
    imageURL:
      'https://res.cloudinary.com/dwi1zckuz/image/upload/v1696618368/micky_mouse_s6dnjs.jpg',
    title: 'FURCOSTUMES',
  },
  {
    projectId: 22,
    category: 'FURCOSTUMES',
    imageURL:
      'https://res.cloudinary.com/dwi1zckuz/image/upload/v1696582864/deluxe-lion-kids-costume-update_rvlfp5.jpg',
    title: 'FURCOSTUMES',
  },
  {
    projectId: 23,
    category: 'FURCOSTUMES',
    imageURL:
      'https://res.cloudinary.com/dwi1zckuz/image/upload/v1696618686/yellow_mskjy1.jpg',
    title: 'FURCOSTUMES',
  },
  {
    projectId: 24,
    category: 'FURCOSTUMES',
    imageURL:
      'https://res.cloudinary.com/dwi1zckuz/image/upload/v1696625642/Screenshot_2023-10-07_022058_zxssgo.jpg',
    title: 'FURCOSTUMES',
  },
  {
    projectId: 25,
    category: 'FURCOSTUMES',
    imageURL:
      'https://res.cloudinary.com/dwi1zckuz/image/upload/v1696625696/Screenshot_2023-10-07_022109_hnd3b8.jpg',
    title: 'FURCOSTUMES',
  },
  {
    projectId: 26,
    category: 'FURCOSTUMES',
    imageURL:
      'https://res.cloudinary.com/dwi1zckuz/image/upload/v1696625741/Screenshot_2023-10-07_022118_dy7tb6.jpg',
    title: 'FURCOSTUMES',
  },
  {
    projectId: 27,
    category: 'FURCOSTUMES',
    imageURL:
      'https://res.cloudinary.com/dwi1zckuz/image/upload/v1696625782/Screenshot_2023-10-07_022127_t7j4l8.jpg',
    title: 'FURCOSTUMES',
  },
  {
    projectId: 28,
    category: 'FURCOSTUMES',
    imageURL:
      'https://res.cloudinary.com/dwi1zckuz/image/upload/v1696625855/Screenshot_2023-10-07_022710_bukila.jpg',
    title: 'FURCOSTUMES',
  },
  {
    projectId: 29,
    category: 'CONTACT_US',
    imageURL:
      'https://img.freepik.com/free-photo/contact-us-customer-support-enquiry-hotline-concept_53876-128047.jpg',
    title: `Phone.no: 9908531059, 9392226760 `,
    description: `Email: vinithmudiraj1996@gmail.com. `,
    sentence: `Address:  Kondamadugu, Bibi Nagar Mdl, Yadadri Bhongir Dist 508126 India`,
  },
  {
    projectId: 30,
    category: 'ABOUT_US',
    imageURL:
      'https://img.freepik.com/free-photo/team-business-people-stacking-hands_53876-166978.jpg',
    title: `We Manufacture and Provide For Rent`,
    description: `We make all types of inflatables and Costumes`,
    sentence: `Timings  - Monday to Friday 9:00am to 6:00pm`,
    sentences: `@ - Saturday and Sunday:  Closed. @`,
  },
]

class App extends Component {
  state = {
    activeTabId: tabsList[0].tabId,
  }

  clickTabItem = tabValue => {
    this.setState({activeTabId: tabValue})
  }

  getFilteredProjects = () => {
    const {activeTabId} = this.state
    const filteredProjects = projectsList.filter(
      eachprojectDetails => eachprojectDetails.category === activeTabId,
    )
    return filteredProjects
  }

  render() {
    const {activeTabId} = this.state
    const filteredProjects = this.getFilteredProjects()
    return (
      <div className="app-container">
        <Header />
        <div className="head-container">
          <h1 className="title">Vinith Inflatables</h1>
          <p className="description">
            We make inflatable Balloons & Bounce, we also Manufacture
            inflatables & also Provide on Rent.
          </p>
        </div>
        <ul className="tabs-container">
          {tabsList.map(tabDetails => (
            <TabItem
              key={tabDetails.tabId}
              tabDetails={tabDetails}
              clickTabItem={this.clickTabItem}
              isActive={activeTabId === tabDetails.tabId}
            />
          ))}
        </ul>

        <ul className="project-list-container">
          {filteredProjects.map(projectDetails => (
            <ProjectItem
              key={projectDetails.projectId}
              projectDetails={projectDetails}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default App
