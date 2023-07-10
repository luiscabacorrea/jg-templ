import Link from 'next/link'

export default function Gallery () {
  return (
    <div
      className="lightbox"
      data-plugin-options="{'delegate': 'a', 'type': 'image', 'gallery': {'enabled': true}, 'mainClass': 'mfp-with-zoom', 'zoom': {'enabled': true, 'duration': 300}}"
    >
      <div className="container-fluid">
        <div className="row">
          <div className="col-6 col-md-3 px-0">
            <Link
              className="d-inline-block custom-img-thumbnail-style-1 img-thumbnail img-thumbnail-no-borders img-thumbnail-hover-icon rounded-0"
              href="img/demos/auto-services/generic/generic-square-1.jpg"
            >
              <img
                className="img-fluid rounded-0"
                src="img/demos/auto-services/generic/generic-square-1.jpg"
                alt=""
              />
            </Link>
          </div>
          <div className="col-6 col-md-3 px-0">
            <Link
              className="d-inline-block custom-img-thumbnail-style-1 img-thumbnail img-thumbnail-no-borders img-thumbnail-hover-icon rounded-0"
              href="img/demos/auto-services/generic/generic-square-2.jpg"
            >
              <img
                className="img-fluid rounded-0"
                src="img/demos/auto-services/generic/generic-square-2.jpg"
                alt=""
              />
            </Link>
          </div>
          <div className="col-6 col-md-3 px-0">
            <Link
              className="d-inline-block custom-img-thumbnail-style-1 img-thumbnail img-thumbnail-no-borders img-thumbnail-hover-icon rounded-0"
              href="img/demos/auto-services/generic/generic-square-3.jpg"
            >
              <img
                className="img-fluid rounded-0"
                src="img/demos/auto-services/generic/generic-square-3.jpg"
                alt=""
              />
            </Link>
          </div>
          <div className="col-6 col-md-3 px-0">
            <Link
              className="d-inline-block custom-img-thumbnail-style-1 img-thumbnail img-thumbnail-no-borders img-thumbnail-hover-icon rounded-0"
              href="img/demos/auto-services/generic/generic-square-4.jpg"
            >
              <img
                className="img-fluid rounded-0"
                src="img/demos/auto-services/generic/generic-square-4.jpg"
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>
    </div>

  )
};
