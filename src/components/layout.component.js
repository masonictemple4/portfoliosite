import BreadCrumbs from '@/components/breadcrumbs/breadcrumbs.component';

const layout = ({children, showBreadcrumb}) => {
  return (
    <div>
      {showBreadcrumb && <BreadCrumbs />}
      <main>{children}</main>
    </div>
  )
};

export default layout;
