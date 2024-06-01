import Layout from '../layout'
import './index.scss'
import Main from '../main'
import TempDownloadView from '../templatesDownload'
import TemplatesAll from '../templatesAll'

// import AdminPanel from "../adminPanel";

export default function Admin() {
  return (
    <Layout>
      {/* <Main /> */}
      {/* <TempDownloadView /> */}
      <TemplatesAll />
    </Layout>
  )
}
