import Script from 'next/script'
import Contentpage from './components/Contentpage'
import ScriptLoader from '@/app/components/script_loader/ScriptLoader'
import Direction from './components/Direction'
import Sponsors from '@/app/components/template/main/container/Sponsors'

export default function page () {
  return (
    <>
      <Contentpage/>
      <Direction/>
      <Sponsors/>
      <Script src='/js/plugins/js/plugins.min.js' />
      <Script src='/js/theme.js' />
      <ScriptLoader src='/js/theme.js' />
      <ScriptLoader src='/js/theme.init.js' />
    </>
  )
};
