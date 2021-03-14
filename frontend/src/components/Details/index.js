import React from "react"

export const Details = ({ data, title }) => {
  return (
    <section className="my-8 px-4 py-6 bg-blue-900">
      <div className="my-4">
        <h1 className="text-3xl uppercase font-semibold text-white">
          {title.title}
        </h1>
      </div>
      {data.map((detail, index) => {
        return (
          <div className="my-6" key={index}>
            <div className="bg-gray-800 bg-opacity-20 py-8 px-8 flex flex-col justify-center rounded-md">
              <p className="my-2 text-lg text-white font-semibold">
                {detail.title}
              </p>
              <p className="text-sm text-white font-light">{detail.body}</p>
            </div>
          </div>
        )
      })}
      <div>
        <img
          src={title.img}
          alt={title.title}
          className="shadow-2xl rounded-2xl"
        />
      </div>
    </section>
  )
}
