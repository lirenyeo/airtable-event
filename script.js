$.ajax({
  url: 'https://api.airtable.com/v0/app3pQlUjyzBlpmmF/Attendees',
  headers: {
    Authorization: 'Bearer key23F8r22FJ7DNvk'
  },
  success: function(result) {
    result.records.forEach((attendee, index) => {
      console.log(attendee)
      $('#dom-entry').append(`
        <tr>
          <th scope="row">${index + 1}</th>
          <td>${attendee.fields.Name}</td>
          <td>${attendee.fields.Email}</td>
          <td>${attendee.fields.Notes}</td>
        </tr>
      `)
    })
  }
})