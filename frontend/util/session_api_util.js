export const login = user => (
  $.ajax({
    method: 'POST',
    url: '/api/session',
    data: { user }
  })
);

export const signup = user => (
  $.ajax({
    method: 'POST',
    url: '/api/users',
    data: { user }
  })
);

export const logout = () => (
  $.ajax({
    method: 'DELETE',
    url: '/api/session'
  })
);

export const fetchUsers = () => (
  $.ajax({
    method: "GET",
    url: `/api/users`
  })
);

export const fetchUser = id => (
  $.ajax({
    method: "GET",
    url: `/api/users/${id}`
  })
);

export const fetchPhoto = id => (
  $.ajax({
    method: "GET",
    url: `/api/photos/${id}`
  })
);

export const updatePhoto = photo => {
  return $.ajax({
    method: "PATCH",
    url: `/api/photos/${photo.id}`,
    data: { photo }
  })
}

export const deletePhoto = photoId => (
  $.ajax({
    method: "DELETE",
    url: `/api/photos/${photoId}`
  })
);
